import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cover from '../components/cover';
import SidePhoto1 from '../components/sidePhoto1';
import SidePhoto2 from '../components/sidePhoto2';
import RunningPhoto from '../components/runningPhoto'
import mainStyles from './main.module.scss';
import LogoWeekend from '../components/logo_weekend'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={mainStyles.cover}>
      <Cover />
    </div>
    <h1>Bienvenue chez POP</h1>
    <section id="values" className={mainStyles.valuesSection}>
      <h2>NOS VALEURS</h2>
      <div className={mainStyles.quoteSection}>
        <p className={mainStyles.quote}>"L’éducation est l’arme la plus puissante que l’on puisse utiliser pour changer le monde"</p>
        <p>Nelson Mandela</p>
      </div>
      <section className={mainStyles.values}>
        <div>
          {/* <div>ICON</div> */}
          <h3>LIBERTE</h3>
          <p>L’enfant doit être libre de penser et d’agir pour se forger sa propre opinion. Les acteurs de POP sont là pour accompagner les futurs adultes vers l’autonomie, la réflexion et la responsabilisation. Chaque enfant est unique et nous faisons tout pour qu’il s’épanouisse intellectuellement et socialement par le biais d’activités et d’échanges, et trouve sa place au sein d’un groupe. Nous souhaitons rendre chaque enfant acteur de son séjour en prônant le partage de connaissances et les débats contradictoires pour qu’il développe une réflexion sans jamais qu’aucune idée ne soit imposée.</p>
        </div>
        <div>
          {/* <div>ICON</div> */}
          <h3>RESPECT ET BIENVEILLANCE</h3>
          <p>Chaque enfant, chaque individu, doit être considéré avec soin. Nous sommes tous égaux en droit et devons être respectueux et bienveillants les uns envers les autres. POP encourage la connaissance en créant un climat de sécurité et d’épanouissement pour les enfants, régit par nos différentes interactions. Le bonheur n’est pas un état constant. Nous devons apprendre a repérer les moments de joie et rendre heureux les jeunes pour tendre un maximum vers l’optimisme.</p>
        </div>
        <div>
          {/* <div>ICON</div> */}
          <h3>ECO-RESPONSABILITE</h3>
          <p>POP se veut acteur majeur du respect de l’environnement et des actions de développement durable. Notre planète est en danger et nous faisons en sorte de sensibiliser nos équipes pédagogiques et les jeunes aux bons gestes du quotidien qui feront d’eux les éco-citoyens de demain. Nous encourageons une consommation des ressources respectueuse en favorisant la saisonnalité, la production locale et le recyclage. Nos équipes transmettront des solutions nouvelles afin d’éveiller la conscience citoyenne de chacun et l’envie de protéger la nature sous toutes ses formes. POP veut se donner les moyens de donner un avenir à notre futur pour continuer l’aventure humaine sur une planète préservée. </p>
        </div>
      </section>
    </section> 
    <section id="weekends" className={mainStyles.weekendPresentationSection}>
      <div className={mainStyles.weekendPresentationInfo}>
        <div className={mainStyles.logoWeekend}><LogoWeekend /></div>
        <p className={mainStyles.weekendPresentationText}>Que ce soit pour un trip en amoureux, ou « boulot boulot », vous avez parfois besoin de confier vos trésors à quelqu’un de confiance pour le week-end. Mais lorsque les grand-parents ne sont pas disponibles, comment faire ?</p>
        <p style={{ color: '#759F42', fontWeight: 700 }} className={mainStyles.weekendPresentationText}>Et si vous appeliez POP ?</p>
        <div className={mainStyles.weekendPresentationColumns}>
          <div>
            <p>Une fois par mois, Raphaël et Marie proposent à vos bouts de choux un week-end à la campagne, comme ceux qu’ils ont connus étant enfants : un vrai week-end comme en famille !</p>
            <h4>Au programme:</h4>
            <p>Ateliers créatifs, découverte ou nature, sports et plein de jeux ludiques mais aussi un moment pour faire les devoirs tous ensemble, de bons petits plats, et des temps de repos pour recommencer la semaine du bon pied !</p>
          </div>
          <div>
            <h4>Un week-end chez la tante Léonie c'est quoi ?</h4>
            <p>C’est la garantie de deux jours au grand air durant lesquels vos enfants :</p>
            <ul>
              <li>- développeront leur imaginaire</li>
              <li>- seront au contact de la nature et sensibilisés à sa culture et aux animaux qui la composent</li>
              <li>- découvriront des activités ludiques et authentiques de notre patrimoine artisanal</li>
              <li>- dégusteront des produits locaux</li>
            </ul>
          </div>
          <div>
            <p>Léonie, c’est la vieille tante toute douce qui sommeille dans le cœur de chaque famille : celle qui a un chat, qui fait des confitures, et qui possède un grenier plein de trésors. Un week-end chez la tante Léonie, c’est la promesse des week-end à la campagne de notre enfance, à jouer dehors, bâtir des mondes imaginaires et savourer de bons produits frais entouré d’enfants de son âge.</p>
            <p>Tous les mois, le lieu et les activités changent, mais l’esprit reste le même.</p>
            <div className={mainStyles.box}>
              <p className={mainStyles.nextWeekend}>Prochain week-end les 11, 12 et 13 octobre</p>
              <p>Il reste quelques places !</p>
            </div>
          </div>
        </div>
      </div>
      <div className={mainStyles.weekendPresentationPhoto}>
        <SidePhoto1 />
      </div>
    </section>
    <section className={mainStyles.weekendPresentationSection}>
      <div className={mainStyles.weekendPresentationInfo}>
        <p className={mainStyles.inscriptionTextGreen}>J’ai envie d’inscrire mon loulou ! Que dois-je faire ?</p>
        <p className={mainStyles.inscriptionTextBlack}>Votre enfant à entre 5 et 11 ans? Vous souhaitez lui faire profiter d'un week-end à la campagne ? C'est parti !</p>
        <div className={mainStyles.weekendInscriptionColumns}>
          <div>
            <p>Les inscriptions se font auprès de POP. Vous aurez à remplir un bulletin d’inscription et la fiche sanitaire.</p>
            <p>Deux semaines avant le départ : Nous vous envoyons par mail la convocation de départ ainsi qu’une lettre de la Tante Léonie qui vous décrira les activités et comment faire la valise de votre enfant.</p>
            <div className={mainStyles.box}>
              <p>Des lieux de départ en région parisienne et dans le Nord.</p>
              <p style={{ marginTop: '20px'}}>Prix du Week-end (forfait tout compris) : 290 € TTC par enfant</p>
            </div>
          </div>
          <div>
            <h4>Avant le week-end:</h4>
            <p>Nous vous apportons de l’aide pour choisir la formule qui vous conviendra le mieux. Une équipe rigoureuse et efficace qui assure le traitement des réservations et des dossiers. Nous vous envoyons toutes les informations par mail pour davantage de rapidité et une conduite éco responsable. Le forfait comprend l’intégralité du week-end (transport, hébergement, pension complète, activités et les assurances). Notre équipe d’encadrement est composée d’animateurs diplômés et très expérimentés. Nous apportons un soin particulier à la séléctions des hébergements pour accueillir vos loulous dans d’excellentes conditions.</p>
          </div>
          <div>
            <h4>Pendant le week-end:</h4>
            <p>Les programmes du week-end sont minutieusement établis afin de garantir la réalisation du séjour dans les meilleures conditions de confort. Tous les jeunes bénéficient des mêmes activités, rien n’est en supplément. Suivi de séjour par un permanent POP. Suivez les aventures de vos enfants en direct sur notre réseau social privé Un numéro d’urgence disponible 24h/24 et 7j/7 est communiqué aux parents Assurance et avance des frais médicaux en cas de petit bobo.</p>
            <h4>Après le week-end:</h4>
            <p>Création d’un montage vidéo du week-end. Envoi d’une enquête de satisfaction et analyse de qualité post séjour. Présentation de nouveaux séjours pour chaque saison.</p>
          </div>
        </div>
      </div>
      <div className={mainStyles.weekendPresentationPhoto}>
        <SidePhoto2 />
      </div>
    </section>
    <section id="camps" className={mainStyles.campSection}>
      <div className={mainStyles.campContainer}>
        <h2>NOS SEJOURS</h2>
        <div className={mainStyles.runningPhoto}><RunningPhoto /></div>
        <h4>Vous êtes élu du CSE ?</h4>
        <p>Vous souhaitez organiser un séjour de vacances pour les enfants des salariés de l’entreprise ?</p>
        <h4>Vous travaillez dans une collectivité ?</h4>
        <p>Vous souhaitez organiser un séjour de vacances pour les enfants de votre commune ?</p>
        <p><a href="#contacts">Contactez-nous !</a></p>
        <p>Nous créons votre séjour éco-responsable sur mesure.</p>
      </div>
    </section>
    <section id="faq" className={mainStyles.faqSection}>
      <h2>CA A L'AIR COOL MAIS J'AI PLEIN DE QUESTIONS</h2>
      <p>Forts de 10 années d’expérience dans le monde de l’animation, nous anticipons les besoins de nos partenaires : nous sommes à même de proposer des idées innovantes et dans l’air du temps tout en répondant à toutes les spécificités des différents publics en nous adaptant à nos interlocuteurs.</p>
      <p>Pourquoi choisir POP ?</p>
      <div className={mainStyles.question}>
        <h5>Comment savoir si les equipes d’encadrement sont vraiment competentes ?</h5>
        <p>Fondé par des formateurs BAFA, POP Education porte une attention particulière à la qualité des équipes d’encadrement. Nos animateurs, directeurs et formateurs sont sélectionnés pour leur sérieux, leur rigueur, et l’attention constante qu’ils accordent à la sécurité des enfants, mais aussi pour leurs capacités à animer. Les personnalités sont diverses et font la richesse de POP Education, mais elles ont une chose en commun : l’envie de toujours mieux faire ! </p>
      </div>
      <div className={mainStyles.question}>
        <h5>Les hebergements sont ils qualitatifs ?</h5>
        <p>Des hébérgements confortables, charmants et proches de la nature raviront nos publics. Nos séjours et formations se déroulent dans des lieux choisis avec exigence par notre équipe de production, et la restauration répond à tous les critères de qualité dans le respect de la saisonnalité et de l’agriculture biologique.</p>
      </div>
      <div className={mainStyles.question}>
        <h5>Mes enfants sont-ils en securite ?</h5>
        <p>La sécurité physique et morale des enfants est notre priorité la plus absolue. Ils sont la prunelle de vos yeux et tout est mis en oeuvre pour que POP soit digne de la confiance que les parents accordent à notre association. Les lieux d’hébergements sont agréés jeunesse et sport et les activités toujours organisés par le personnel compétent.</p>
      </div>
      <div className={mainStyles.question}>
        <h5>L’equipe veille-t-elle a l’épanouissement de mon enfant ?</h5>
        <p>Bienveillance, valorisation, accompagnement vers l’autonomie sont nos mots d’ordre. Nous veillons à ce que les enfants découvrent et apprennent de nouvelles choses et ressortent grandis de nos séjours.</p>
      </div>
      <div className={mainStyles.question}>
        <h5>Puis-je faire confiance a POP education ?</h5>
        <p>La confiance est très précieuse et c’est un lien qui doit unir les différents acteurs de l’aventure POP. Parents, enfants, prestataires et équipes POP doivent oeuvrent à ce que ce lien grandisse chaque jour. Lorsque vos enfants sont avec nous, nous sommes disponibles 24h/24 et 7 jours sur 7.</p>
      </div>
    </section>
    <section id="contacts" className={mainStyles.contactSection}>
      <h2>CONTACTEZ NOUS</h2>
      <div className={mainStyles.form}>
        <iframe title="contact" src="https://docs.google.com/forms/d/e/1FAIpQLSc1weXFtKXOFwNxNweKWp9LXexw4GQwKNlSFiNYE64QsMEITg/viewform?embedded=true" width="500" height="1031" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    </section>
  </Layout>
)

export default IndexPage
