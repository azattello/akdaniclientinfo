import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/main.css';
import guide from '../assets/img/guide.png';
import track from '../assets/img/track.png';
import geo from '../assets/img/geo.png';
import handshake from '../assets/img/handshake.png';
import logo from '../assets/img/logo.jpg'

import Tab from './Tab'

const titlePage = "Главная"; 
const namecargo = "Ak_Dani_Cargo"
const onas = '📌📌📌Ал  карго сіздің тауарыңызды қытай қоймасынан қабылдап алып одан кейін сіздің қолыңызға алғанға дейінгі аралыққа жауап береді.'

const Main = () => {
    return (

            <div className="main">
                 <div className="title">
                        {titlePage}
                    </div>
                <header className="header">
                  
                    <div className="header__mini">
                    <div className="info__cargo">
                        <h1 className="namecargo">{namecargo}</h1>
                        <img src={logo} className="logo2" alt="" />

                    </div>

                   
                    </div>
                    
                      


                </header>
                <div className="section">

                        <div className="blocks__info">

                            {/* <div className="block_info ">
                                <h3 className='text__block_info'>Инструкция</h3>
                                <img className="iconMain" src={guide} alt="" />

                            </div> */}
                            <Link to="/parcels">
                            <div className="block_info ">
                                <h3 className='text__block_info'>Отследить трек номер</h3>
                                <img className="iconMain" src={track} alt="" />
                            </div>
                            </Link>
                            
                            {/* 
                            <div className="block_info ">
                                <h3 className='text__block_info'>Адрес Китайского склада</h3>
                                <img className="iconMain" src={geo} alt="" />

                            </div> */}

                            <a href='https://wa.link/jiahks' className="block_info ">
                                <h3 className='text__block_info'>Стать партнером</h3>
                                <img className="iconMain" src={handshake} alt="" />

                            </a>


                            
                    </div>


                  

                    
                    <div className="about">
                        <h3>Что нельзя заказывать через наше карго:</h3>
                        <p>
                        <br /><br />1. Жидкие химические средства , любые виды напитков! Они могут пролития и испортить другие товары! 
                        <br /><br />2. Зеркало , и даже с обрешёткой может повредиться ! 
                        <br /><br />3. Вейп , зажигалки, газовые баллоны, сигареты !
                        <br /><br />4. Продукты питания ! 
                        <br /><br />5. Растения !
                        <br /><br />6. Норковая шуба, золота, айфон (на сайтах вы не найдёте оригинал) можно заказывать через доверенных лиц напрямую с магазина и дать адрес нашего склада в Китае ! 
                        <br /><br />7. Оружие любого вида , боеприпасы! 
                        <br /><br />8. Лекарства, бады, психотропные вещества!
                        <br /><br />
                        Біз сынған товарға жауапкершілік алмаймыз ❌❌❌ Себебі Қытайдағы склад пен  мен Алматының арақашықтығы ұзақ , сол үшін де упаковкасы жақсы болу керек!
                        <br /><br />
                        Тыйым товар болса таможняда конфискациядан өтеді "бұндай сәтте маған ешқандай артық реніштеріңіз болмас үшін🚫😉" сол үшін ескертеміз!
                        6️⃣ Сынатын заттар, люстралар, монитор, манекен, бампер, ыдыс-аяқ, пластик заттар, пластик ойыншықтар, очки, тағы басқа сынғыш заттар болатын болса, сатушыдан жақсылап орап салып жіберуін сұраңыз!😌😉
                        
                        </p>
                    </div>

                    

                    <div className="about">
                        <p>
                        <br /><br />1. ұзак уақыт күтілуде тұрған тауардың "7-10 күн аралығында тауарыныз жетпесе складқа"  ақпаратын ҚЫТАЙ САТУШЫСЫНАН аласыз. Неге? 
                        Себебі, ол тауарды біздің қытай қоймасына жетпеген , қол қойып  қолына қабылдап алған жоқ. 
                        <br /><br />
                        Тапсырыс бергеннен кейін ҚЫТАЙ СКЛАДЫНА ЯҒНИ қоймасына жеткенге дейінгі аралыққа Қытайдың ішкі логистикасы жауап береді. ОНЫ ӨЗДЕРІҢІЗ ҚАДАҒАЛАЙСЫЗДАР !!!
                        <br /><br />

                        这个包裹并没有送到仓库，因为仓库签收记录里没有关于该包裹的信息，可能是一段物流那边出现的问题，请你给我一个满意的答复或者进行退款处理,否则我将进行 起诉！
                        <br /><br />

                        Бұл тапсырыс қоймаға жеткізілмеген  , себебі қоймада бұл тапсырыс туралық ешқандай ақпарат  көрсетілмеген , ол қытай ішкі логистика жағынан туындаған мәселе болуы мүмкін. Сіздің тараптан маған қанағаттанарлық жауап беріңіз немесе ақшаны қайтаруыңызды сұраймын , әйтпесе дүкенге  шағымданам !
                        <br /><br />

                        <br /><br />

                        Бүл смс продовец ке жіберетін ! Егер тауар қытай  складқа түспеген жағдайда , жібересіздер  только қытайша жазылғанды📌
                        </p>
                    </div>
                    

                    <div className="about">
                        <h3>О нас</h3>
                        <p>{onas}</p>
                    </div>
            
                    
                    
                </div>

               

                <div className="area"></div>
                
                <Tab/>
                

                  
                
            </div>

    )
}

export default Main;