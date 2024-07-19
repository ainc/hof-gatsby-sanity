import * as React from 'react';
import Layout from '../../components/Layout/Layout';
import Sponsors from '../../components/Sponsors/TempSponsors';
import IconPair from '../../components/IconPair/IconPair';
import Title from '../../components/Title/Title';
import { Container, Button, Stack } from "react-bootstrap";
import * as styles from './nominate.module.scss';



const NominatePage = () => {
    return (
        <Layout>
            <Container>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <Title className={styles.header}>
                <h2>Nominate</h2>
                <IconPair className={styles.icons}/>
            </Title>
            <section style={{color: "rgb(102,102,102)"}}>
                <p><b>Note: </b>Nominations for the 2024 class and beyond is open. <b>Deadline: May 3, 2024</b></p>
                <h2>Selection Criteria</h2>
                <ul>
                    <li>Revenue & profit achieved</li>
                    <li>Employment generation</li>
                    <li>Contribution to industry</li>
                    <li>Contributions to community-oriented projects and society</li>
                    <li>Innovation of product or service</li>
                </ul>
            </section>
            <Stack gap={3} className={styles.buttonContainer} lg={12}>
                <Button className={styles.button} href="https://forms.zohopublic.com/virtualoffice9155/form/NominationKentuckyEntrepreneurHallofFame/formperma/RbkleuPk2I_uJqvvP0aAi2DrXVrfwso-QKVOWR6h_EI" target="_blank" rel="noreferrer">Hall of Fame Nominations (click here, deadline: 5/3/24)</Button>
                <Button className={styles.button} href="https://forms.zohopublic.com/virtualoffice9155/form/EmergingEntrepreneurNominationKentuckyEntrepreneur/formperma/WlfEONIkD_KdXHI5lfj9kXvZ8SUBgQTaC9bIf9AnGXk" target="_blank" rel="noreferrer">Emerging Entrepreneur Nominations (click here, deadline: 5/3/24)</Button>
                <Button className={styles.button} href="https://zfrmz.com/HiHnbru8T7pFNW1rTFpw" target="_blank" rel="noreferrer">Mentor of the Year Award (click here, deadline: 5/3/24)</Button>
                <Button className={styles.button} href="https://zfrmz.com/FcyrqHK54OYvk507ovTQ" target="_blank" rel="noreferrer">Investor of the Year (click here, deadline: 5/3/24)</Button>
                <Button className={styles.button} href="https://zfrmz.com/PcjCQ9fgz9mjukf8hpv3" target="_blank" rel="noreferrer">President/Executive Nomination (click here, deadline: 5/3/24)</Button>
            </Stack>
            <Sponsors />
            </Container>
        </Layout>
    );
}
export default NominatePage;

export const Head = () => <title>Nominate</title>
