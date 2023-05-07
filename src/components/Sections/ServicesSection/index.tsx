import { IHomeProps } from "@/types/props"
import { Container } from "@mantine/core"
import { useStyles } from "./styles"
import Service from "@/components/Services";
import { IService } from "@/types/sanity";

export default function ServicesSection({ services } : IHomeProps) {
    const { classes } = useStyles();
    
    return (
        <>
            <Container size="xl" className={classes.cards}>
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
        </>
    )
}