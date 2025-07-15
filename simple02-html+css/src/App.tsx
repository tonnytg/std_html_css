import React from 'react'
import './App.css';

export default function App() {
  return (
    <>
    <div className="box-center">
        <div className="home">
            Hello, World! 🌍
            <p>Teste</p>
            <a href="#">Clique aqui!</a>
        </div>
        <div className="box-1">
            Box1
        </div>
        <div className="box-2">
            Box2
        </div>
        <div className="test-box">
            <div>
                Teste 1 
            </div>
            <div>
                Teste 2
            </div>
            <span>Inline element</span>
            <span>Inline element</span>
        </div>
        <div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className="content-wrapper">
                <p>Teste wrapper</p>
            </div>
        </div>

        <article>
            <p className="first">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </article>

        <footer>
            <div>
            <h3>Footer</h3>
            <p>Footer Menu</p>
            <ul>
            <li>Instagram</li>
            </ul>
            </div>
            <a href="#">Footer Link</a>
            <ul>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>YouTube</li>
            </ul>
        </footer>
    </div>
    </>
  );
}

