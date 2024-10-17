import { useEffect, useState } from 'react';
import { Flex, Image, Text, Title } from '@mantine/core';

    export function ImmoCards() {
        const [immo, setImmo] = useState({
            Name: '',
            Price: '',
            description: '',
            picture: ''
        });

    useEffect(() => {
        fetch('http://localhost:5050/api/immo')
            .then(response => response.json())
            .then(data => {
                console.log('données recues:', data);
                setImmo(data);
            });
    }, []);

    useEffect(() => {
        console.log('immo mis à jour:', immo);
    }, [immo]);

  return (
    <Flex align="center" justify="center" gap="xl"> {/* Adjusted gap to create space between image and text */}
      <Image
        src='http://localhost:5050/assets/images/maisontest.jpg'
        alt="oooh la belle maison"
        width={250}
        height={250}
      />

      <div>
        <Title order={2}>{immo.Name}</Title>
        <Title order={1}>{immo.Price}</Title>

        <Text>
        {immo.description}
        </Text>
      </div>
    </Flex>
  );
};