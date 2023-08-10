import { IHomeProps } from "@/types/props"
import { Container, Title } from "@mantine/core"
import { useStyles } from "./styles"
import Service from "@/components/Sections/ServicesSection/Services";
import { IService } from "@/types/sanity";

export default function ServicesSection({ services } : IHomeProps) {
    const { classes } = useStyles();
    
    return (
        <div id="services">
            <Container size="lg" mt={40}>
                <Title order={1} align="center" mb={20}>Services Offered</Title>
                <Container size="xl" className={classes.cards} mt={40}>
                    {services.map((service : IService) => {
                        return (
                            <Service 
                                key={service.title.replace(/\s/g, '').toLowerCase()}
                                title={service.title} 
                                description={service.description}
                                imageURL={service.imageURL}
                                price={service.price}
                            />
                        )
                    })} 
                </Container>
            </Container>
        </div>
    )
}