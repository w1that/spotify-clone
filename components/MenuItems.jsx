import { observer } from "mobx-react-lite";
import Link from "next/link";
import React from "react";
import MenuItem from "./MenuItem";
import userStore from "../mobx/UserStore";
import { notification } from "antd";
import { useRouter } from "next/router";
import menuItemStore from "../mobx/MenuItemStore";

function MenuItems() {
  const user = userStore.currentUserId;
  const router = useRouter();

  const openNotification = (placement, message, description) => {
    notification.info({
      message: message,
      description: description,
      placement,
    });
  };

  function handleAllowedClick(id, urlEndpoint) {
    let message = "";
    let description = "";
    switch (id) {
      case 2:
        message = "Kitaplığının Tadını Çıkar";
        description =
          "Kitaplığındaki kayıtlı şarkıları, podcast'leri, sanatçıları ve çalma listelerini görmek için oturum aç.";
        break;
      case 3:
        message = "Bir Çalma Listesi Oluştur";
        description = "Çalma listeleri oluşturmak ve paylaşmak için oturum aç.";
        break;
      case 4:
        message = "Beğenilen Şarkılarının Tadını Çıkar";
        description =
          "Beğendiğin tüm şarkıları kolay bir çalmal listesinde görmek için oturum aç.";
        break;

      default:
        break;
    }
    if (!user) {
      openNotification("topLeft", message, description);
    } else {
      menuItemStore.setSelectedMenuItemId(id);

      if (id === 3) {
        // create new playlist id, add it to the user, then route there.
        const newId = "xxx";
        router.push(`${urlEndpoint}xxx`);
      } else {
        router.push(urlEndpoint);
      }
    }
  }
  // next link is used on some of them. especially the ones which has not a route changing not depends on whether user is logged in.
  return (
    <div className="mt-5 flex flex-col">
      <Link href={"/"} passHref>
        <button onClick={() => menuItemStore.setSelectedMenuItemId(0)}>
          <MenuItem
            id={0}
            selectedId={menuItemStore.selectedMenuItemId}
            icon="AiOutlineHome"
            text="Ana sayfa"
          />
        </button>
      </Link>

      <Link href={"/search"} passHref>
        <button onClick={() => menuItemStore.setSelectedMenuItemId(1)}>
          <MenuItem
            id={1}
            selectedId={menuItemStore.selectedMenuItemId}
            icon="RiSearchLine"
            text="Ara"
          />
        </button>
      </Link>

      <button onClick={() => handleAllowedClick(2, "/collection/playlists")}>
        <MenuItem
          id={2}
          selectedId={menuItemStore.selectedMenuItemId}
          icon="BiLibrary"
          text="Kitaplıgın"
        />
      </button>

      <div className="mt-5 flex flex-col">
        {/* creates new playlist. */}
        <button
          onClick={() => {
            handleAllowedClick(3, "/playlist/");
          }}
        >
          <MenuItem
            id={3}
            selectedId={menuItemStore.selectedMenuItemId}
            icon="MdAddBox"
            text="Calma Listesi Olustur"
          />
        </button>

        <button onClick={() => handleAllowedClick(4, "/collection/tracks")}>
          {/* for aligning purpose I wrapped the last one into this div. */}

          <MenuItem
            id={4}
            selectedId={menuItemStore.selectedMenuItemId}
            icon="AiFillHeart"
            text="Begenilen Sarkılar"
          />
        </button>
      </div>
    </div>
  );
}

export default observer(MenuItems);
