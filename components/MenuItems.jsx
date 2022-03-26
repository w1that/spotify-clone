import { observer } from "mobx-react-lite";
import Link from "next/link";
import React from "react";
import MenuItem from "./MenuItem";
import userStore from "../mobx/UserStore";
import { notification } from "antd";

function MenuItems({ store }) {
  const user = userStore.currentUserId;
  const clickable = !user;

  const openNotification = (placement, message, description) => {
    notification.info({
      message: message,
      description: description,
      placement,
    });
  };

  function handleAllowedClick(id) {
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
      store.setSelectedMenuItemId(id);
    }
  }

  return (
    <div className="mt-5 flex flex-col">
      <Link href={"/"} passHref>
        <button onClick={() => store.setSelectedMenuItemId(0)}>
          <MenuItem
            id={0}
            selectedId={store.selectedMenuItemId}
            icon="AiOutlineHome"
            text="Ana sayfa"
          />
        </button>
      </Link>

      <Link href={"/search"} passHref>
        <button onClick={() => store.setSelectedMenuItemId(1)}>
          <MenuItem
            id={1}
            selectedId={store.selectedMenuItemId}
            icon="RiSearchLine"
            text="Ara"
          />
        </button>
      </Link>

      <Link href={"/collection/playlists"} passHref>
        <button onClick={() => handleAllowedClick(2)}>
          <MenuItem
            id={2}
            selectedId={store.selectedMenuItemId}
            icon="BiLibrary"
            text="Kitaplıgın"
          />
        </button>
      </Link>

      <div className="mt-5 flex flex-col">
        {/* creates new playlist. */}
        <Link href={"/playlist/xxx"} passHref>
          <button onClick={() => handleAllowedClick(3)}>
            <MenuItem
              id={3}
              selectedId={store.selectedMenuItemId}
              icon="MdAddBox"
              text="Calma Listesi Olustur"
            />
          </button>
        </Link>

        <Link href={"/collection/tracks"} passHref>
          <button onClick={() => handleAllowedClick(4)}>
            {/* for aligning purpose I wrapped the last one into this div. */}
            <div className="pl-0.5">
              <MenuItem
                id={4}
                selectedId={store.selectedMenuItemId}
                icon="AiFillHeart"
                text="Begenilen Sarkılar"
              />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default observer(MenuItems);
