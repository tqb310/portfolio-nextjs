import {
  Box,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
      <Box
        borderRadius={"lg"}
        bg="red"
        p={3}
        mb={6}
        textAlign="center"
        color={"white"}
      >
        Hello, I&apos;m a front-end developer based in Viet
        Nam
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as={"h2"} variant="page-title">
            Truong Quoc Bao
          </Heading>
          <Text as={"h1"} variant="page-subtitle">
            Digital Craftsman (Developer)
          </Text>
        </Box>
      </Box>
    </Container>
  );
}
