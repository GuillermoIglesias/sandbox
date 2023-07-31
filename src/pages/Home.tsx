import { Button, Stack, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Stack align="center" mt={50}>
      <Text size="xl" weight={500}>
        Welcome to Mantine!
      </Text>
      <Link to="/Trades">
        <Button>Click the button</Button>
      </Link>
    </Stack>
  );
}
