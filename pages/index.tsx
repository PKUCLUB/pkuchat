import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Markdown from "../components/Markdown";
import { MyChatGPTContext } from "../contexts/MyChatGPTContext";

export default function Home() {
  const router = useRouter();
  const { dispatch } = useContext(MyChatGPTContext);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <Markdown
          disableCopy
          children={`### My ChatGPT - 构建您自己的聊天机器人站点

My ChatGPT是一款基于OpenAI的ChatGPT API开发的个人聊天机器人站点。它能够为您提供一个私人的的聊天机器人站点，使您的客户和访客能够与您的机器人进行互动。

My ChatGPT的作者[Gabriel Wu](https://github.com/lucifer1004)已将源代码以MIT协议开源在[GitHub](https://github.com/lucifer1004/my-chatgpt)上

`}
        />
        <Button
          onClick={() => {
            const newId = uuidv4();
            dispatch({ type: "create", chatId: newId });
            router.push(`/chats/${newId}`);
          }}
          className="mt-5 flex w-full items-center justify-center dark:text-slate-600 lg:hidden"
          title="开始一个新对话（当前对话将被自动保存）"
        >
          <ChatBubbleLeftRightIcon
            className="h-6 text-indigo-300"
            aria-hidden="true"
          />
          立刻开始对话
        </Button>
      </div>
    </Layout>
  );
}
