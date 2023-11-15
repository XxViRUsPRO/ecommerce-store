"use client";

import React, { Fragment, useState } from "react";
import { Color, Size } from "@/types";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";
import Filter from "./filter";

type Props = {
  sizes: Size[];
  colors: Color[];
};

const MobileFilters = ({ sizes = [], colors = [] }: Props) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
        Filters
        <Plus />
      </Button>
      <Transition show={open} as={Fragment}>
        <Dialog onClose={onClose} className="relative z-50 lg:hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="fixed inset-0 flex">
              <Dialog.Panel className="relative ml-auto flex flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl h-full w-full max-w-xs">
                <div className="flex items-center justify-end px-4">
                  <Button
                    className="p-2 hover:scale-110 bg-white text-gray-600"
                    onClick={onClose}
                  >
                    <X />
                  </Button>
                </div>

                <div className="p-4">
                  <Filter title="Sizes" data={sizes} selectedId="sizeId" />
                  <Filter title="Colors" data={colors} selectedId="colorId" />
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileFilters;
