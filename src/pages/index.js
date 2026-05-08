import React from 'react';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';

export default function Home() {
  return (
    <Layout
      title="Wicked Engine"
      description="Modern open-source 3D engine">
      <main className="container margin-vert--lg">

        {/* Header Section */}
        <section style={{ overflow: 'hidden', marginBottom: '2rem' }}>
          <img
            src="Content/logo_small.png"
            width="180px"
            style={{ float: 'left', marginRight: '20px' }}
            alt="Wicked Engine Logo"
          />
          <h1>Wicked Engine</h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '1rem' }}>
            <a href="https://github.com/turanszkij/WickedEngine/actions">
              <img src="https://github.com/turanszkij/WickedEngine/workflows/Build/badge.svg" alt="Build Status" />
            </a>
            <a href="https://discord.gg/CFjRYmE">
              <img src="https://img.shields.io/discord/602811659224088577?logo=discord" alt="Discord" />
            </a>
            <a href="https://wickedengine.net/forum/">
              <img src="https://img.shields.io/badge/forum-join-blue" alt="Forum" />
            </a>
            <a href="https://twitter.com/intent/follow?screen_name=turanszkij">
              <img src="https://img.shields.io/twitter/follow/turanszkij.svg?style=social" alt="Twitter" />
            </a>
            <a href="https://store.steampowered.com/app/1967460/Wicked_Engine/">
              <img src="https://img.shields.io/badge/Steam-%23000000.svg?logo=steam&logoColor=white" alt="Steam" />
            </a>
            <a href="https://turanszkij.itch.io/wicked-engine">
              <img src="https://img.shields.io/badge/itch.io-%23FF0B34.svg?logo=Itch.io&logoColor=white" alt="Itch.io" />
            </a>
          </div>
        </section>

        {/* Intro Section */}
        <section style={{ overflow: 'hidden', clear: 'both', marginBottom: '2rem' }}>
          <img
            src="https://github.com/turanszkij/wickedengine-gifs/raw/main/girl_pose.png"
            width="240px"
            style={{ float: 'right', marginLeft: '20px' }}
            alt="Intro pose"
          />
          <p>
            Wicked Engine is an open-source 3D engine with modern graphics. Use this as a C++ framework for your graphics projects, a standalone 3D editor, LUA scripting or just for learning.
          </p>
          <ul>
            <li><a href="https://wickedengine.net/">Website</a></li>
            <li><a href="features.txt">Features</a></li>
            <li><a href="Content/Documentation/WickedEditor-Manual.pdf">Editor Manual</a></li>
            <li><a href="Content/Documentation/WickedEngine-Documentation.md">C++ Documentation</a></li>
            <li><a href="Content/Documentation/ScriptingAPI-Documentation.md">Lua Documentation</a></li>
            <li><a href="https://www.youtube.com/playlist?list=PLLN-1FTGyLU_HJoC5zx6hJkB3D2XLiaxS">Videos</a></li>
          </ul>
          <p>
            You can get the full source code by using Git version control and cloning <code>https://github.com/turanszkij/WickedEngine.git</code>, or downloading it as zip.
          </p>
        </section>

        <hr />

        {/* Platforms & Build */}
        <section>
          <img
            src="https://github.com/turanszkij/wickedengine-gifs/raw/main/guy_pose.png"
            width="240px"
            style={{ float: 'left', marginRight: '20px' }}
            alt="Guy pose"
          />
          <h3>Platforms:</h3>
          <ul>
            <li>Windows 10+</li>
            <li>Linux</li>
            <li>Mac OS</li>
            <li>Xbox Series X|S</li>
            <li>PlayStation 5</li>
          </ul>
        </section>

        <section style={{ clear: 'both', marginTop: '2rem' }}>
          <h2>How to build:</h2>

          <img
            src="https://github.com/turanszkij/wickedengine-gifs/raw/main/videoprojectors.gif"
            width="320px"
            style={{ float: 'right', marginLeft: '20px' }}
            alt="Projectors"
          />
          <h4>Windows</h4>
          <p>
            To build Wicked Engine for Windows 10 or newer, open the <code>WickedEngine.sln</code> solution file with the latest Visual Studio. Press F5 to build and start.
          </p>
          <CodeBlock language="bash">
            {`cmake -B build
cmake --build build --config Release`}
          </CodeBlock>

          <img
            src="https://github.com/turanszkij/wickedengine-gifs/raw/main/fps.gif"
            width="320px"
            style={{ float: 'right', marginLeft: '20px' }}
            alt="FPS"
          />
          <h4>Linux</h4>
          <p>On Ubuntu 20.04, install dependencies and build:</p>
          <CodeBlock language="bash">
            {`sudo apt update
sudo apt install libsdl2-dev build-essential
mkdir build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
make`}
          </CodeBlock>
        </section>

        <hr />

        {/* Code Examples */}
        <section>
          <h2>Examples:</h2>
          <img
            src="https://github.com/turanszkij/wickedengine-gifs/raw/main/clouds.gif"
            width="320px"
            style={{ float: 'right', marginLeft: '20px' }}
            alt="Clouds"
          />
          <h4>Initialization (C++):</h4>
          <CodeBlock language="cpp">
            {`#include "WickedEngine.h"

wi::Application application;
application.SetWindow(hWnd);

while(true) {
   application.Run(); 
}`}
          </CodeBlock>

          <h4>Scripting (LUA):</h4>
          <CodeBlock language="lua">
            {`path = RenderPath3D;
application.SetActivePath(path);
entity = LoadModel("myModel.wiscene");
scene = GetScene();
transform = scene.Component_GetTransform(entity);
transform.Translate(Vector(2, 0, 0));`}
          </CodeBlock>
        </section>

        {/* Graphics API Table */}
        <section style={{ marginTop: '2rem' }}>
          <h3>Graphics API:</h3>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Argument</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>vulkan</td><td>Use the Vulkan rendering device on Windows</td></tr>
              <tr><td>debugdevice</td><td>Use debug layer for graphics API validation.</td></tr>
              <tr><td>igpu</td><td>Prefer integrated GPU selection.</td></tr>
              <tr><td>alwaysactive</td><td>Application will not pause in the background.</td></tr>
            </tbody>
          </table>
        </section>

        <footer style={{ marginTop: '3rem', fontStyle: 'italic', textAlign: 'center' }}>
          <p>Check out the documentation for more advanced use cases!</p>
        </footer>
      </main>
    </Layout>
  );
}