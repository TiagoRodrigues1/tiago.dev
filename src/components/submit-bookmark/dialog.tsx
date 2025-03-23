"use client";

import { useState } from "react";
import React from "react";

import { useMediaQuery } from "usehooks-ts";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { SUBMIT_FORM_DESCRIPTION, SUBMIT_FORM_TILTE } from "@/lib/constants";
import { SubmitBookmarkForm } from "@/components/submit-bookmark/submit-form";
import { BookmarkCollection } from "@/lib/types";

type SubmitBookmarkDialogProps = {
  bookmarks: BookmarkCollection[];
  currentBookmark: BookmarkCollection | undefined;
};

export function SubmitBookmarkDialog(props: SubmitBookmarkDialogProps) {
  const { bookmarks, currentBookmark } = props;

  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary" size={"sm"}>
            <Send />
            Submit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{SUBMIT_FORM_TILTE}</DialogTitle>
            <DialogDescription>{SUBMIT_FORM_DESCRIPTION}</DialogDescription>
          </DialogHeader>
          <SubmitBookmarkForm
            className="px-4"
            setFormOpen={setOpen}
            bookmarks={bookmarks}
            currentBookmark={currentBookmark}
          />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Submit Bookmark</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Submit Bookmark</DrawerTitle>
          <DrawerDescription>
            Add a new bookmark to your collection.
          </DrawerDescription>
        </DrawerHeader>
        <SubmitBookmarkForm
          className="px-4"
          setFormOpen={setOpen}
          bookmarks={bookmarks}
          currentBookmark={currentBookmark}
        />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
