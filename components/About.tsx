import React from 'react';
import Divider from './Divider';
import Heading from './Heading';

interface AboutProps {
  enabled: boolean;
  title: string;
}

export default function About({
  enabled,
  title,
}: AboutProps) {
  return enabled ? (
    <>
      <Divider anchor={title} />
      <Heading text={title} />
      <div className="dark:text-slate-300">
        <p className="my-4 text-2xl font-medium">你好呀</p>
        <p className="my-4">
          我是Jerry，走在網站工程師路上的圖資人。主要專注在資訊組織（也就是分類法啦～），學生時期也稍微研究過期刊相關議題，偶爾還是喜歡瞭解一下學界現況。
        </p>
        <p className="my-4">
          對寫程式的態度是不討厭也不喜歡，以能解決需求為主。偶爾會想把資訊組織的概念帶回來寫程式，但還在嘗試中😛
        </p>
        <p className="my-4">
          Github中放的主要是練習用的，所以大多沒有完成，還在摸索想做的內容方向。
        </p>
      </div>
    </>
  ) : <template />;
}
