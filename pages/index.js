import {
  Container,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Badge,
  Text,
  Code,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Icon,
  Heading
} from "@chakra-ui/react";
import { FaGithubAlt, FaTelegram } from "react-icons/fa";
const Home = () => (
  <Container>
    <Box mt={10} mb={6} p={6}>
      <Badge mt={4} mb={5}>
        About me
      </Badge>
<Image src="/images/stars.svg" alt="star" objectFit="cover" height={56}/>
      <Stat mt={3} mb={5}>
        <StatLabel>Who am I</StatLabel>
        <StatNumber>Willie Xu</StatNumber>
        <StatHelpText>( Developer / Designer )</StatHelpText>
      </Stat>

      <Text fontSize="md" mb={3}>
        I&lsquo;m a high school student ( Grade 2 ) from China!
      </Text>
      <Text fontSize="md" mb={3}>
        This site created on <Code> Jan 20 </Code>, focus on English content
      </Text>

          <Accordion allowMultiple>
  <AccordionItem>
          <Heading
          fontWeight="normal"
          fontSize="2xl"
          fontFamily="inherit"
        >
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Contact me
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </Heading>
    <AccordionPanel pb={4}>
    <Link href="https://github.com/xuwillie" isExternal>
      <Icon as={FaGithubAlt} w={8} h={8} borderWidth={2} p="2px" borderRadius="full" color="gray.400" mr={3}/>
      </Link>
    <Link href="https://t.me/williexu" isExternal>
      <Icon as={FaTelegram}  w={8} h={8} borderWidth={2} p="2px" borderRadius="full" color="telegram.300"/>
      </Link>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </Box>

    <Box
      mt={10}
      mb={6}
      p={6}
      bg={useColorModeValue("#edf2f780", "#2d2d2d")}
      borderRadius="lg"
    >
      <Badge mt={4} mb={7}>
        What I Like
      </Badge>
      <UnorderedList>
        <ListItem mt={3}>Linux, especially Archlinux</ListItem>
        <ListItem mt={3}>
          Music, I like <code>We ued to be-Jacoo</code>, the album of{" "}
          <code>Age of Innocence</code>, single sound 夜明けと蛍
        </ListItem>
        <ListItem mt={3}>
          Coding, I like building website, JavaScript, Shell Script. Try to
          Python, C++.{" "}
        </ListItem>
      </UnorderedList>
    </Box>

    <Box
      mt={10}
      mb={6}
      p={6}
      bg={useColorModeValue("#edf2f780", "#2d2d2d")}
      borderRadius="lg"
    >
      <Badge mt={4} mb={7}>
        My friends
      </Badge>
      <UnorderedList>
        <ListItem mt={3}>
          <Link href="https://www.snn.moe" isExternal>
            Powerlean
          </Link>
        </ListItem>
        <ListItem mt={3}>
          <Link href="https://anillc.cn" isExternal>
            Anillc
          </Link>
        </ListItem>
        <ListItem mt={3}>
          <Link href="https://www.chinq.xyz" isExternal>
            CHINQ
          </Link>
        </ListItem>
        <ListItem mt={3}>
          <Link href="https://ncdwlq.space" isExternal>
            NCDWLQ
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  </Container>
);

export default Home;
