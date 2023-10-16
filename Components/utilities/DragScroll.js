import {useEffect, useRef} from "react";


export default function DragScroll({children, speedScale, dragEndCallback}) {
  const ref = useRef(null);
  const touchData = useRef( {
    touchStart: 0,
    touchEnd: 0
  })
  const mouseCoords = useRef({
    isMouseDown: false,
    startX: 0,
    scrollLeft: 0,
  })

  useEffect(() => {
    document.addEventListener(
      "mouseup",
      handleDragEnd
    )
    document.addEventListener(
      "mousemove",
      handleDrag
    )
    return () => {
      document.removeEventListener(
        "mouseup",
        handleDragEnd
      )
      document.removeEventListener(
        "mousemove",
        handleDrag
      )
    }
  }, [])

  const handleDragStart = (e) => {
    if (!ref.current) return;

    const slider = ref.current.children[0];
    const startX = e.pageX - slider.offsetLeft;
    const scrollLeft = slider.scrollLeft;
    mouseCoords.current = {...mouseCoords.current, startX: startX, scrollLeft: scrollLeft };
    mouseCoords.current.isMouseDown = true;
    document.body.style.cursor = "grabbing";
  }

  const handleDragEnd = () => {
    if (!mouseCoords.current.isMouseDown) return;
    mouseCoords.current.isMouseDown = false;
    document.body.style.cursor = "default";
    if (!ref.current) return;

    if (dragEndCallback) dragEndCallback();
  }

  const handleDrag = (e) => {
    if (!mouseCoords.current.isMouseDown || !ref.current) return;
    e.preventDefault();
    document.body.style.cursor = "grabbing";
    const slider = ref.current.children[0];
    const x = e.pageX - slider.offsetLeft;
    const walkX = x - mouseCoords.current.startX;
    slider.scrollLeft = mouseCoords.current.scrollLeft - (walkX * (speedScale ?? 1));
  }


// the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    touchData.current.touchStart = e.targetTouches[0].clientX;
  }

  const onTouchMove = (e) => touchData.current.touchEnd = e.targetTouches[0].clientX

  const onTouchEnd = () => {
    if (!touchData.current) return
    // Toggle overflow to prevent momentum scroll
    ref.current.children[0].style.overflow = 'hidden';
    setTimeout(() => {
      ref.current.children[0].style.overflow = 'auto';
      if (dragEndCallback) dragEndCallback();
    }, 50)
  }

  return (
    <div
      ref={ref}
      onMouseDown={handleDragStart}
      onMouseMove={handleDrag}
      onMouseUp={handleDragEnd}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {children}
    </div>
  )

}