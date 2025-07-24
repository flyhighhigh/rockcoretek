"use client";
import clsx from "clsx";
import Image from "next/image";

import { type AvatarFragment, type AuthorFragment } from "../lib/types/static-types";

import { CustomTooltip } from "./tooltip";
import type { ImageProps } from "next/image";

export function Author({
  image,
  _title,
  ...props
}: AuthorFragment & Omit<ImageProps, "src" | "alt">) {
  return (
    <CustomTooltip content={_title}>
      <Image
        alt={image.alt ?? `Avatar for ${_title}`}
        className="size-8 rounded-full border-2 border-white object-cover transition-all dark:border-gray-900"
        height={image.height || 32}
        src={image.url}
        width={image.width || 32}
        {...props}
      />
    </CustomTooltip>
  );
}

export function Avatar({
  className,
  alt,
  url,
  ...props
}: AvatarFragment & Omit<ImageProps, "src" | "alt">) {
  return (
    <Image
      priority
      alt={alt ?? "Avatar"}
      className={clsx(
        "size-7 shrink-0 rounded-full border-2 border-white object-cover dark:border-gray-900",
        className,
      )}
      height={28}
      src={url}
      width={28}
      {...props}
    />
  );
}
