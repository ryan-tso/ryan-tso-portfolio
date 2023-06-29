import {useRef, useState} from "react";


export default function DragScroll({children}) {
  const ref = useRef(null);
  const mouseCoords = useRef({
    startX: 0,
    scrollLeft: 0,
  })
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleDragStart = (e) => {
    if (!ref.current) return;

    const slider = ref.current.children[0];
    const startX = e.pageX - slider.offsetLeft;
    const scrollLeft = slider.scrollLeft;
    mouseCoords.current = { startX, scrollLeft };
    setIsMouseDown(true);
    document.body.style.cursor = "grabbing";
  }

  const handleDragEnd = () => {
    setIsMouseDown(false);
    if (!ref.current) return;
    document.body.style.cursor = "default";
  }

  const handleDrag = (e) => {
    if (!isMouseDown || !ref.current) return;
    e.preventDefault();
    const slider = ref.current.children[0];
    const x = e.pageX - slider.offsetLeft;
    const walkX = x - mouseCoords.current.startX;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
  }

  return (
    <div ref={ref} onMouseDown={handleDragStart} onMouseUp={handleDragEnd} onMouseMove={handleDrag}>
      {children}
    </div>
  )

}