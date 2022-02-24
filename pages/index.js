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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Icon,
  Heading,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Tag,
  TagLabel,
  TagRightIcon,
  Image
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithubAlt, FaTelegram, FaHeartbeat } from "react-icons/fa";
import { AiOutlineAndroid } from "react-icons/ai";
import { SiArchlinux, SiFreebsd } from "react-icons/si"

const Home = () => (
  <Container>
    <Box mt={10} mb={6} p={6}>
      <Badge mt={4} mb={5}>
        About me
      </Badge>
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
      <Icon as={FaGithubAlt} w={8} h={8} borderWidth={2} p="2px" borderRadius="full" color="gray.400" borderColor="gray.400" mr={3}/>
      </Link>
    <Link href="https://t.me/williexu" isExternal>
      <Icon as={FaTelegram}  w={8} h={8} borderWidth={2} borderColor="telegram.300" p="2px" borderRadius="full" color="telegram.300"/>
      </Link>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </Box>
    <Box
      mt={10}
      mb={6}
      p={6}
      >
      <Badge mt={4} mb={7}>
        What I Like
      </Badge>
      <Tabs variant='soft-rounded' colorScheme='telegram'>
  <TabList>
    <Tab>OS</Tab>
    <Tab>Languages</Tab>
    <Tab>Singer</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Tag size="md" variant='outline' colorScheme='blue' my={3} mr={2}>
      <TagLabel>Android</TagLabel>
      <TagRightIcon as={AiOutlineAndroid} />
    </Tag>
<Tag size="md" variant='outline' colorScheme='blue' my={3} mr={2}>
      <TagLabel>ArchLinux</TagLabel>
      <TagRightIcon as={SiArchlinux} />
    </Tag>
<Tag size="md" variant='outline' colorScheme='blue' my={3} mr={2}>
      <TagLabel>FreeBSD</TagLabel>
      <TagRightIcon as={SiFreebsd} />
    </Tag>

    </TabPanel>
    <TabPanel>
      <UnorderedList>
        <ListItem mt={3}>
          <Code>
Javascript
          </Code>
        </ListItem>
<ListItem mt={3}>
          <Code>
CoffeeScript
          </Code>
</ListItem>
<ListItem mt={3}>
          <Code>
React
          </Code>
</ListItem>
<ListItem mt={3}>
          <Code>
Python
          </Code>
        </ListItem>
</UnorderedList>
    </TabPanel>
<TabPanel>
 <Tag size="md" variant='outline' colorScheme='blue' my={3}>
      <TagLabel>Kano</TagLabel>
      <TagRightIcon as={FaHeartbeat} />
    </Tag>
<Image src='/images/kano-1.png' alt="logo" rounded="md"/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Box>
    <Box
      mt={10}
      mb={6}
      p={6}
      bg={useColorModeValue("gray.50", "#2d2d2d")}
      borderRadius="lg"
    >
      <Badge mt={4} mb={7} colorScheme="cyan">
        My friends
      </Badge>
      <UnorderedList>
        <ListItem mt={3}>
          <Link href="https://snn.moe" isExternal>
            SUNN
<ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
        <ListItem mt={3}>
          <Link href="https://anillc.cn" isExternal>
            Anillc
<ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
        <ListItem mt={3}>
          <Link href="https://www.chinq.xyz" isExternal>
            CHINQ
<ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
        <ListItem mt={3}>
          <Link href="https://ncdwlq.space" isExternal>
            NCDWLQ
<ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>

  </Container>
);

export default Home;
