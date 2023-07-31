import { Button, Stack, Text, useMantineColorScheme } from '@mantine/core';

export default function Trades() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <Stack align="center" mt={50}>
      <Text size="xl" weight={500}>
        Check the trades
      </Text>
      <Button onClick={() => toggleColorScheme()}>Click to change theme</Button>
    </Stack>
  );
}
