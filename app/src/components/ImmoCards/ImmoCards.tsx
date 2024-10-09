import { Flex, Image, Text, Title } from '@mantine/core';
import BienImage from '../../assets/images/maisontest.jpg';

export function ImmoCards() {
  return (
    <Flex align="center" justify="center" gap="xl"> {/* Adjusted gap to create space between image and text */}
      <Image
        src={BienImage}
        alt="oooh la belle maison"
        width={250}
        height={250}
      />

      <div>
        <Title order={2}>Texte Heading</Title>
        <Title order={1}>300 K</Title>

        <Text>
          Descripiton du bien
        </Text>
      </div>
    </Flex>
  );
}
