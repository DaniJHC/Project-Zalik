import React from 'react';
import './Content.scss';
import { IoFilter } from "react-icons/io5";
const Content = () => {
    return (
        <div className="content-wrapper">
            <div className="content">
                <div className="left-panel">
                    <section className="company-info">
                        <h2>Prezentacja</h2>
                        <p>Dostaca rozwiąań IT dla biznesu. 20 lat doswiadcze na rynku, setki zrealizowanych projektów.</p>
                        <ul>
                            <li><strong>Strona:</strong> Usługi biznesowe</li>
                            <li><strong>Adres:</strong> Portowa 13B, Słupsk, Poland</li>
                            <li><strong>Telefon:</strong> 59 841 37 14</li>
                            <li><strong>Email:</strong> biuro@kaliop.pl</li>
                            <li><strong>Website:</strong> <a href="http://kaliop.pl" target="_blank" rel="noopener noreferrer">kaliop.pl</a></li>
                        </ul>
                        <p><strong>Status:</strong> Zamknięte teraz</p>
                        <p>Jeszcze nie oceniono (0 opinii)</p>
                    </section>
                </div>

                <div className="right-panel">
                    <section className="posts">
                        <div className='filt'>
                        <h2>Posty</h2>
                        <h2>{ IoFilter() }Filtry</h2>
                        </div>
                        <div className="post">
                            <p>
                                <strong>Kaliop Poland</strong> <br/>
                                Kolejne spotkanie Rady Pracodawców w <a href="https://example.com" target="_blank" rel="noopener noreferrer">Instytut Nauk Ścisłych i Technicznych</a> za nami! <br/>
                                Rozmawialiśmy o czymś dużym — Centrum Nowoczesnych Technologii. 🚀 Jest to działanie długoterminowe, ale nie możemy wyjawić za wiele. <br/>
                                Trzymamy kciuki, żeby nadszedł момент, gdzie mówić о nim będą wszyscy. 🤞
                            </p>
                            <div className="post-images">
                                <img src="https://www.unitex.ru/i/unitex/news/131.jpg" alt="spotkanie" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Content;


