import { Typography, Box } from '@mui/material';
import MainLayout from '../components/layout/MainLayout';
import HeroSection from '../components/layout/HeroSection';

const Privacy = () => {
  return (
    <MainLayout>
      <HeroSection
        title="La Privacy su GiocaBimbo"
        subtitle="Massima trasparenza e zero raccolta dati, come dev'essere"
        button={false}
        image={null}
      />

      <Box sx={{ px: { xs: 2, md: 6 }, py: 4 }}>
        <Typography variant="body1" paragraph>
          Benvenuto/a su <strong>GiocaBimbo</strong>! Siamo felici che tu stia esplorando la nostra app. Questa pagina ti spiega in modo chiaro come gestiamo (e soprattutto, non gestiamo) i tuoi dati mentre utilizzi GiocaBimbo.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Il Nostro Impegno per la Tua Privacy
        </Typography>
        <Typography variant="body1" paragraph>
          La tua privacy è fondamentale per noi. Poiché GiocaBimbo è un progetto didattico creato per l'esame di Front-end Development, il nostro principale obiettivo, oltre a fornire idee utili per attività con i bambini, è dimostrare la possibilità di creare applicazioni che rispettino al massimo la privacy dell'utente.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Nessuna Raccolta di Dati Personali, Nessun Login, Nessun Tracciamento
        </Typography>
        <Typography variant="body1" paragraph>
          Vogliamo essere estremamente chiari:
        </Typography>
        <Typography variant="body1" component="ul" sx={{ pl: 3 }}>
          <li>GiocaBimbo <strong>NON</strong> raccoglie alcun dato personale.</li>
          <li>Non esiste un sistema di login o registrazione. Puoi usare l'app liberamente, senza account.</li>
          <li>Non effettuiamo tracciamento, profilazione o pubblicità.</li>
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Cosa Viene Salvato (e Dove): Solo sul Tuo Dispositivo
        </Typography>
        <Typography variant="body1" paragraph>
          L'unica informazione che GiocaBimbo potrebbe "ricordare" riguarda le tue interazioni dirette all'interno dell'app e sul tuo specifico dispositivo. Ad esempio:
        </Typography>
        <Typography variant="body1" component="ul" sx={{ pl: 3 }}>
          <li>Se marchi un'attività come "preferita".</li>
          <li>Se aggiungi manualmente una tua attività personalizzata.</li>
        </Typography>
        <Typography variant="body1" paragraph>
          Queste informazioni vengono salvate <strong>esclusivamente</strong> in locale sul tuo dispositivo (nel <em>localStorage</em> del browser). Non vengono mai inviate online, non arrivano su server remoti e non vengono condivise.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Un Progetto Didattico, Non Commerciale
        </Typography>
        <Typography variant="body1" paragraph>
          Ricorda che GiocaBimbo è un'applicazione a scopo puramente didattico e senza fini di lucro. Non abbiamo alcun interesse commerciale nei tuoi dati, semplicemente perché non li raccogliamo!
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          In Sintesi: I Tuoi Dati Rimangono con Te
        </Typography>
        <Typography variant="body1" paragraph>
          Puoi utilizzare GiocaBimbo con la massima tranquillità. Non c'è nulla da nascondere perché non prendiamo nulla dei tuoi dati personali. Le uniche piccole informazioni che vengono salvate (come le tue attività preferite) restano confinate sul tuo dispositivo per migliorare la tua esperienza personale.
        </Typography>

        <Typography variant="body1" sx={{ mt: 3 }}>
          Grazie per aver utilizzato GiocaBimbo! 💛
        </Typography>
      </Box>
    </MainLayout>
  );
};

export default Privacy;
