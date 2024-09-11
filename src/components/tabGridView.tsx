import React, { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  tabOneMainStyle: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',  
    gridTemplateRows: 'repeat(9, auto)',    
    fontSize: '14px',
    gap: '2px',
  } as React.CSSProperties,
  item: {
    padding: '1px',
    border: 'none',
  } as React.CSSProperties,
  subTitle: {
    fontSize: '14px',
    fontWeight: 'bold',
    fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
    backgroundColor: '#fff6f6',
    color: '#707497',
  } as React.CSSProperties,
  subContent: {
    fontSize: '12px',
    fontWeight: 'normal',
    fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
    backgroundColor: 'transparent',
    color: '#707497',
  } as React.CSSProperties,
  detailContent: {
    fontSize: '14px',
    fontWeight: 'bold',
    fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
    backgroundColor: 'transparent',
    color: '#010101',
  } as React.CSSProperties,
  partOne: {
    gridColumn: 'span 2', // Each item in partOne will span 2 columns
  } as React.CSSProperties,
  partTwo: {
    gridColumn: 'span 2', // Each item in partTwo will span 2 columns
  } as React.CSSProperties,
// Only Tab2
  tabTwoMainStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '20px', // Adds space between columns
  },
  doubleColumn: {
    display: 'flex',
    flexDirection: 'row',
    flex: 2,
    gap: '10px', // Adds space between sub-columns
  },
  subColumn: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
};

const tab1Grid: React.FC = () => {
  return (
    <div style={styles.tabOneMainStyle}>
      <div style={{ ...styles.item, ...styles.subTitle }}>ANBIETER</div>
      <div style={{ ...styles.item, ...styles.subTitle }}>&nbsp;</div>
      <div style={{ ...styles.item, ...styles.subTitle }}>KONTO</div>
      <div style={{ ...styles.item, ...styles.detailContent }}>&nbsp;</div>
      <div style={{ ...styles.item, ...styles.subContent }}>Bank</div>
      <div style={{ ...styles.item, ...styles.detailContent }}>Trade Republic</div>
      <div style={{ ...styles.item, ...styles.subContent }}>Laufzeit</div>
      <div style={{ ...styles.item, ...styles.subTitle }}>-</div>
      <div style={{ ...styles.item, ...styles.subContent }}>Produkt</div>
      <div style={{ ...styles.item, ...styles.detailContent }}>Zinskonto</div>
      <div style={{ ...styles.item, ...styles.subContent }}>Anlagebetrag</div>
      <div style={{ ...styles.item, ...styles.detailContent }}>1 € - beliebig</div>
      <div style={{ ...styles.item, ...styles.subTitle }}>KONDITIONEN</div>
      <div style={{ ...styles.item, ...styles.subTitle }}>&nbsp;</div>
      <div style={{ ...styles.item, ...styles.subContent }}>Koppelprodukt</div>
      <div style={{ ...styles.item, ...styles.detailContent }}>inklusive Depot</div>
      <div style={{ ...styles.item, ...styles.subContent }}>Kontoführungsgebühr</div>
      <div style={{ ...styles.item, ...styles.detailContent }}>0,00 €</div>
      <div style={{ ...styles.item, ...styles.subContent }}>Vertragsende</div>
      <div style={{ ...styles.item, ...styles.detailContent }}>-</div>
      <div style={{ ...styles.item, ...styles.subContent }}>Zinssatz p. a. </div>
      <div style={{ ...styles.item, ...styles.detailContent }}>3,75 %</div>
      <div style={{ ...styles.item, ...styles.subTitle }}>SICHERHEIT & STEUERN</div>
      <div style={{ ...styles.item, ...styles.subContent }}>&nbsp;</div>
      <div style={{ ...styles.item, ...styles.subContent }}>Zinszahlungen pro Jahr</div>
      <div style={{ ...styles.item, ...styles.detailContent }}>12</div>
      <div style={{ ...styles.item, ...styles.subContent }}>Einlagensicherung</div>
      <div style={{ ...styles.item, ...styles.detailContent }}>100.000 € (DE & IR) </div>
      <div style={{ ...styles.item, ...styles.subContent }}>Zinsausschüttung</div>
      <div style={{ ...styles.item, ...styles.detailContent }}>Verrechnungskonto</div>
      <div style={{ ...styles.item, ...styles.subContent }}>Bonität des Landes </div>
      <div style={{ ...styles.item, ...styles.detailContent}}>AAA / AA </div>
      <div style={{ ...styles.item, ...styles.subContent }}>Prämie</div>
      <div style={{ ...styles.item, ...styles.subContent }}>&nbsp;</div>
      <div style={{ ...styles.item, ...styles.subContent }}>Freistellungsauftrag</div>
      <div style={{ ...styles.item, ...styles.subContent }}>&nbsp;</div>
    </div>
  );
};

const tab2Grid: React.FC = () => {
  return (
    <div style={styles.tabTwoMainStyle}>
      {/* First main column (sub-divided into two columns) */}
      <div style={styles.doubleColumn}>
        {/* First sub-column for titles */}
        <div style={styles.subColumn}>
          <div style={{ ...styles.item, ...styles.subTitle }}>KATEGORIEN</div>
          <div style={{ ...styles.item, ...styles.subContent }}>Konditionen</div>
          <div style={{ ...styles.item, ...styles.subContent }}>Einlagensicherung</div>
          <div style={{ ...styles.item, ...styles.subContent }}>Steuern</div>
          <div style={{ ...styles.item, ...styles.subContent }}>Eröffnung</div>
          <div style={{ ...styles.item, ...styles.subTitle }}>Gesamt</div>
        </div>
        {/* Second sub-column for the longer descriptions */}
        <div style={styles.subColumn}>
        <div style={{ ...styles.item, ...styles.detailContent }}>&nbsp;</div> 
        <div style={{ ...styles.item, ...styles.detailContent }}>28/28</div>
        <div style={{ ...styles.item, ...styles.detailContent }}>4/7</div>
        <div style={{ ...styles.item, ...styles.detailContent }}>13/13</div>
        <div style={{ ...styles.item, ...styles.detailContent }}>13/13</div>
        <div style={{ ...styles.item, ...styles.detailContent }}>58/61</div>
        </div>
      </div>

      {/* Second main column for the numeric details */}
      <div style={styles.column}>
        <div style={{ ...styles.item, ...styles.subContent }}>Diese Bewertung basiert auf der Recherche und Auswertung unseres Redaktionsteams. Sobald sich Produktmerkmale ändern, passen wir die Bewertung entsprechend an.</div>
      </div>
    </div>
  );
};


export default tab1Grid;
export { tab1Grid, tab2Grid };
