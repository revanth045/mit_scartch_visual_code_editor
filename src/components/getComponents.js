import React from "react";
import Move from "./sprite_motion/Move";
import TurnAntiClockwise from "./sprite_motion/TurnAntiClockwise";
import TurnClockwise from "./sprite_motion/TurnClockwise";
import GotoXY from "./sprite_motion/Goto";
import SayMessage from "./sprite_looks/SayMessage";
import SayMessageWithTimer from "./sprite_looks/SayMessageWithTimer";
import Size from "./sprite_looks/Size";
import Show from "./sprite_looks/Show";
import Hide from "./sprite_looks/Hide";
import HideMessage from "./sprite_looks/HideMessage";
import MoveY from "./sprite_motion/MoveY";
import Think from "./sprite_looks/Think";
import ThinkWithTimer from "./sprite_looks/ThinkWithTimer";

// fetch components based on different keys
export const getComponent = (key, id) => {
  switch (key) {
    case "MOVE_Y":
      return <MoveY comp_id={id} />;
    case "MOVE":
      return <Move comp_id={id} />;

    case "TURN_CLOCKWISE":
      return <TurnClockwise comp_id={id} />;

    case "TURN_ANTI_CLOCKWISE":
      return <TurnAntiClockwise comp_id={id} />;

    case "GOTO_XY":
      return <GotoXY comp_id={id} />;

    case "SAY_MESSAGE":
      return <SayMessage comp_id={id} />;

    case "SAY_MESSAGE_WITH_TIMER":
      return <SayMessageWithTimer comp_id={id} />;

    case "SIZE":
      return <Size comp_id={id} />;

    case "SHOW":
      return <Show comp_id={id} />;

    case "HIDE":
      return <Hide comp_id={id} />;


    case "HIDE_MESSAGE":
      return <HideMessage comp_id={id} />;

    case "THINK":
      return <Think comp_id={id} />;

    case "THINK_TIMER":
      return <ThinkWithTimer comp_id={id} />;

    default:
      return React.null;
  }
};
