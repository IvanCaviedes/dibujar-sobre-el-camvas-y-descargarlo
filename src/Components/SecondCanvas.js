import React from "react";
import CanvasDraw from "react-canvas-draw";
import styles from '../Styles/SecondCanvas.module.css'
import { Typography } from "@material-ui/core";

const SecondCanvas = React.forwardRef((props, ref) => {
  return (
    <div>
      <Typography variant="h5" color="primary" className={styles.title}>CANVAS RESULT</Typography>
      <CanvasDraw hideGrid={true} disabled={true} canvasWidth={500} canvasHeight={500} ref={ref} className={styles.draw} />
    </div>
  );
});

export default SecondCanvas;
