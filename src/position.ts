/**
 * Position the tooltip
 *
 * @param event The mouse event.
 * @param tooltipBox
 * @param offsetX Horizontal offset.
 * @param offsetY Vertical offset.
 */
export function calculatePosition(
  event: MouseEvent,
  tooltipBox: { width: number; height: number },
  offsetX: number,
  offsetY: number,
  direction: string
) {

  let directionCallbacks = {
    n: directionNorth,
    s: directionSouth,
    e: directionEast,
    w: directionWest,
    nw : directionNorthWest,
    ne : directionNorthEast,
    sw : directionSouthWest,
    se : directionSouthEast
  }

  let coords = directionCallbacks[direction]()
  let x = event.clientX + coords.left + offsetX;
  if (x + tooltipBox.width > window.innerWidth) {
    x = +event.clientX - offsetX - tooltipBox.width;
  }

  let y = event.clientY + coords.top + offsetY;
  if (y + tooltipBox.height > window.innerHeight) {
    y = +event.clientY - offsetY - tooltipBox.height;
  }

  function directionNorth() {
    return {
      top: -tooltipBox.height,
      left: -tooltipBox.width/2
    }
  }

  function directionSouth() {
    return {
      top: tooltipBox.height,
      left: -tooltipBox.width / 2
    }
  }

  function directionEast() {
    return {
      top: tooltipBox.height / 2,
      left: 0
    }
  }

  function directionWest() {
    return {
      top: tooltipBox.height / 2,
      left: 0
    }
  }


  function directionNorthWest() {
    return {
      top: -tooltipBox.height,
      left: -tooltipBox.width
    }
  }

  function directionNorthEast() {
    return {
      top: -tooltipBox.height,
      left: tooltipBox.width
    }
  }

  function directionSouthWest() {
    return {
      top: 0,
      left: -tooltipBox.width
    }
  }

  function directionSouthEast() {
    return {
      top: 0,
      left: tooltipBox.width
    }
  }

  return { x, y };
}
