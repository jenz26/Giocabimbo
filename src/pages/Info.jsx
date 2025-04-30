import { Typography, Box } from '@mui/material';
import MainLayout from '../components/layout/MainLayout';
import HeroSection from '../components/layout/HeroSection';

const Info = () => {
  return (
    <MainLayout>
      <HeroSection
        title="Informazioni sul Progetto GiocaBimbo"
        subtitle="Un'app pensata per aiutare i genitori, creata con passione e competenza"
        button={false}
        image={null}
      />

      <Box sx={{ px: { xs: 2, md: 6 }, py: 4 }}>
        <Typography variant="body1" paragraph>
          Benvenuti nella pagina dedicata al progetto <strong>GiocaBimbo</strong>! Sappiamo che trovare attività stimolanti ed educative per i più piccoli può essere una sfida quotidiana per i genitori. GiocaBimbo nasce proprio con l'obiettivo di semplificare questo compito, offrendo una piattaforma intuitiva dove cercare e scoprire idee per intrattenere e far crescere i bambini nella fascia d'età da 0 a 8 anni. L'applicazione è pensata per essere una risorsa utile, con suggerimenti che spaziano da giochi creativi a momenti di apprendimento divertente, il tutto presentato in un ambiente digitale accogliente.
        </Typography>

        <Typography variant="body1" paragraph>
          È importante sottolineare che GiocaBimbo è un progetto sviluppato in ambito accademico, realizzato specificamente per l'esame di Front-end Development. Questa applicazione web non ha fini commerciali, ma rappresenta una dimostrazione pratica delle competenze acquisite durante il percorso di studi universitari. È un lavoro didattico che mira a esplorare e applicare le moderne tecniche di sviluppo web, con particolare attenzione alla creazione di un'esperienza utente positiva e significativa.
        </Typography>

        <Typography variant="body1" paragraph>
          La realizzazione tecnica di GiocaBimbo si basa sull'utilizzo di tecnologie all'avanguardia nel mondo del front-end. Abbiamo scelto di lavorare con <strong>React</strong>, un framework JavaScript ampiamente utilizzato per la creazione di interfacce utente dinamiche e reattive, supportato dall'ambiente di sviluppo rapido <strong>Vite</strong>. L'aspetto visivo e l'interfaccia sono stati curati utilizzando <strong>Material UI</strong>, una libreria di componenti che ci ha permesso di implementare un design coerente, pulito e intuitivo. La cura per i dettagli, dai colori pastello allo stile giocoso ma ordinato, riflette il nostro desiderio di creare un'esperienza rassicurante e piacevole per i genitori che utilizzano l'app.
        </Typography>

        <Typography variant="body1" paragraph>
          Abbiamo messo grande passione e attenzione nel tentativo di creare un'applicazione che fosse non solo funzionale, ma anche gradevole da usare e in linea con le esigenze delle famiglie. Speriamo che, pur essendo un progetto didattico, GiocaBimbo possa offrire spunti utili e dimostrare l'impegno profuso nella sua realizzazione.
        </Typography>

        <Typography variant="body1" sx={{ mt: 3 }}>
          Grazie per aver visitato la pagina e per l'interesse dimostrato verso il progetto GiocaBimbo! 💛
        </Typography>
      </Box>
    </MainLayout>
  );
};

export default Info;
