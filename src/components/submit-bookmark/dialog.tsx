"use client";

import { Suspense, useState } from "react";

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
import { SUBMIT_FORM_DESCRIPTION, SUBMIT_FORM_TILTE } from "@/lib/constants";
import { SubmitBookmarkForm } from "@/components/submit-bookmark/submit-form";
import { BookmarkCollection } from "@/lib/types";
import { LoadingSpinner } from "@/components/loading-spinner";

type SubmitBookmarkDialogProps = {
  readonly bookmarks: BookmarkCollection[];
  readonly currentBookmark: BookmarkCollection | undefined;
};

export function SubmitBookmarkDialog(props: SubmitBookmarkDialogProps) {
  const { bookmarks, currentBookmark } = props;

  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Suspense fallback={<LoadingSpinner />}>
        <DialogTrigger asChild>
          <Button variant="secondary" size={"sm"} className="z-10">
            <Send />
            Submit
          </Button>
        </DialogTrigger>
      </Suspense>
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
