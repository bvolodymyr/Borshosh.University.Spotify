"use client";

import { TbPlaylist } from "react-icons/tb";
import { MdOutlineFileUpload } from "react-icons/md";

import { Song } from "@/types";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import { MdOutlineCreateNewFolder } from "react-icons/md";
// import CreatePlaylistModal from "./CreatePlaylistModal";


interface LibraryProps {
  songs: Song[];
}

const Library: React.FC<LibraryProps> = ({
  songs
}) => {
  const { user } = useUser();
  const uploadModal = useUploadModal();
  const authModal = useAuthModal();
  // const createPlaylistModal = CreatePlaylistModal();

  const onPlay= useOnPlay(songs);


  // const createOnClick = () => {
  //   if (!user) {
  //     return authModal.onOpen();
  //   }

  //   return createPlaylistModal.onOpen();
  // }

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    return uploadModal.onOpen();
  }

  return ( 
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">
            Your Library
          </p>
        </div>
        <span 
    className="
      text-neutral-400 
      cursor-pointer 
      hover:text-white 
      transition
    "
    onClick={onClick}
    style={{ marginRight: "50px" }}
  ></span>
        <MdOutlineFileUpload 
          onClick={onClick} 
          size={20} 
          
          className="
            text-neutral-400 
            cursor-pointer 
            hover:text-white 
            transition
          "
        />
        <MdOutlineCreateNewFolder 
        onClick={() => {}} 
        size={20} 
        className="
          text-neutral-400 
          cursor-pointer 
          hover:text-white 
          transition
        "
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {songs.map((item) => (
            <MediaItem
            onClick={(id: string) => onPlay(id)}
            key={item.id}
            data={item}
            />
            
        ))}
        
      </div>
    </div>
   );
}
 
export default Library;