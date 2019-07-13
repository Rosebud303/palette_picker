import React, { Component } from 'react';
import uniqid from 'uniqid';
import LittleUni from '../Unicorn';
import Rainbow from '../Rainbow';


export const Project = (props) => {
  const key = () => uniqid();
  const { palettes, name } = props;
  const pal = palettes[0];

  return (
    <article className="project-card">
      { palettes.length
      && (
        <>
          <h3>{name}</h3>
          <LittleUni
            colors={[
              pal.color_1,
              pal.color_2,
              pal.color_3,
              pal.color_4,
              pal.color_5
            ]}
            size="little"
          />
        </>
      )
      }
      <div className="rainbow-wrapper">
        { palettes.length && palettes.map(pal => (
          <Rainbow
            colors={[
              pal.color_1,
              pal.color_2,
              pal.color_3,
              pal.color_4,
              pal.color_5
            ]}
            key={key}
          />
        ))}
      </div>
    </article>
  );
};
export default Project;
