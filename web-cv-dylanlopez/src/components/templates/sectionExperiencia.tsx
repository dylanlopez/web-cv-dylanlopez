import { useState } from 'react';
import { TitlesH1 } from '../ui/atoms/titleH1';
import { Tab } from '../ui/atoms/tab';
import { Tab2021 } from '../ui/molecules/tab2021';
import { Tab2018 } from '../ui/molecules/tab2018';
import { Tab2014 } from '../ui/molecules/tab2014';
import { Tab2010 } from '../ui/molecules/tab2010';
import { Tab2006 } from '../ui/molecules/tab2006';
import './sectionExperiencia.css'

export const SectionExperiencia = () => {
  const [activeTab, setActiveTab] = useState('2021');

  return (
    <section id="experiencia" className="section animate__animated animate__bounceInRight">
      <TitlesH1 text="Experiencia" />
      <div className="tabs is-toggle is-fullwidth" id="tabs">
        <ul>
          <Tab year="2021 - Hoy" isActive={activeTab === '2021'} onClick={() => setActiveTab('2021')} />
          <Tab year="2018 - 2020" isActive={activeTab === '2018'} onClick={() => setActiveTab('2018')} />
          <Tab year="2014 - 2017" isActive={activeTab === '2014'} onClick={() => setActiveTab('2014')} />
          <Tab year="2010 - 2013" isActive={activeTab === '2010'} onClick={() => setActiveTab('2010')} />
          <Tab year="2006 - 2009" isActive={activeTab === '2006'} onClick={() => setActiveTab('2006')} />
        </ul>
      </div>

      <div id="tab-content">
        {activeTab === '2021' && <Tab2021 />}
        {activeTab === '2018' && <Tab2018 />}
        {activeTab === '2014' && <Tab2014 />}
        {activeTab === '2010' && <Tab2010 />}
        {activeTab === '2006' && <Tab2006 />}
      </div>
    </section>
  )
}
