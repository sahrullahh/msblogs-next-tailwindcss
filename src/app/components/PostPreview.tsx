"use client";
import Link from "next/link";
import { PostMetadata } from "../utils/postMetadata";
import { Icon } from "@iconify/react";
export default function PostPreview(props: PostMetadata) {
  return (
    <div className="group p-4 cursor-pointer transition-colors hover:border-yellow-600 border rounded-md  ">
      <Link
        href={`/blog/${props.slug}`}
        className="space-y-2"
      >
        <h2 className="text-2xl flex gap-3 items-center font-bold group-hover:text-yellow-600">
          {!props.public ? <Icon icon="weui:lock-outlined" /> : ""}
          {props.title}
        </h2>
        <p className="text-base text-gray-500">{props.subtitle}</p>
        <div className="flex justify-between">
          <p className="flex gap-3 items-center">
            <Icon icon="solar:calendar-linear" /> {props.date}
          </p>
          <p className="flex gap-3 items-center group-hover:text-yellow-600">
            Read post
            <Icon icon="jam:arrow-right" />
          </p>
        </div>
      </Link>
    </div>
  );
}
