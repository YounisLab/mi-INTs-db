import React from "react";
import { Stage, Layer, Line, Rect } from "react-konva";

export interface GeneViewProps {
  gene?: string;
  mi_no?: number;
  exon_coords?: [number, number][];
  intron_coords?: [number, number][];
}

const geneLengthScale = 0.02;
const rectHeight = 20;

function GeneView({
  mi_no = 3,
  exon_coords = [],
  intron_coords = [],
}: GeneViewProps) {
  const geneView: React.ReactChild[] = [];

  console.log(exon_coords, intron_coords);

  if (exon_coords.length > 0) {
    let currentPos = 100;
    let intronSize = 0;
    let exonSize = exon_coords[0][1] - exon_coords[0][0];
    console.log(-1, currentPos, intronSize, exonSize);

    // draw exon 0
    geneView.push(
      <Rect
        key="e0"
        x={currentPos}
        y={0}
        width={geneLengthScale * exonSize}
        height={rectHeight}
        fill={"black"}
      />
    );
    currentPos += geneLengthScale * exonSize;

    // draw remaining introns and exons
    for (let i = 0; i < intron_coords.length; i++) {
      intronSize = intron_coords[i][1] - exon_coords[i][0];
      exonSize = exon_coords[i][1] - exon_coords[i][0];
      console.log(i, currentPos, intronSize, exonSize);

      geneView.push(
        <Line
          key={`i${i}`}
          points={[
            currentPos,
            rectHeight / 2,
            (currentPos += geneLengthScale * intronSize),
            rectHeight / 2,
          ]}
          strokeWidth={2}
          stroke={"black"}
        />
      );
      geneView.push(
        <Rect
          key={`e${i + 1}`}
          x={currentPos}
          y={0}
          width={geneLengthScale * exonSize}
          height={rectHeight}
          fill={"black"}
        />
      );
      currentPos += geneLengthScale * exonSize;
    }
  }

  console.log(geneView);

  return (
    <Stage width={window.innerWidth} height={100}>
      <Layer>{geneView}</Layer>
    </Stage>
  );
}

export default GeneView;
