import { useState } from "react";
import { type IMenuLinks } from "@/db/db";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface TreeMenuProps {
    node: IMenuLinks;
    tab?: number;
}

export default function TreeMenu({ node, tab = 16 }: TreeMenuProps) {

    const [isShowed, setIshowed] = useState(true);

    const handleClick = () => {
        setIshowed(!isShowed);
    }

    if (node.children) {
        return (
            <div>
                <div className="flex gap-1 items-center cursor-pointer" onClick={handleClick}>
                    {isShowed ? (
                        <div>
                            <span className="flex"><ChevronDown size={12} /></span>
                        </div>
                    ) : (
                        <div onClick={handleClick}>
                            <span className="flex"><ChevronRight size={12} /></span>
                        </div>
                    )}
                    <div>
                        <span>{node.name}</span>
                    </div>
                </div>


                <motion.div 
                    className="overflow-hidden"
                    style={{ marginLeft: `${tab}px` }}
                    animate={{ height: (isShowed ? "auto" : "0px") }}
                >
                    {
                        node.children.map((child, index) => (
                            <div key={index}>
                                <TreeMenu node={child} />
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        )

    } else {
        return (
            <div>
                <p>{node.name}</p>
            </div>
        )
    }
}