import Stack from 'react-bootstrap/Stack';

export default function VerticalExample() {
  return (
    <Stack gap={3} >
      <div className="bg-light border p-4 m-4">First item</div>
      <div className="bg-light border p-4 m-4">Second item</div>
      <div className="bg-light border p-4 m-4">Third item</div>
    </Stack>
  );
}