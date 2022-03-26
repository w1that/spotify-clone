import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

export default function AlbumCover() {
  return (
    <Card
    hoverable
    className='w-40 h-40 bg-slate-100'
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  )
}
