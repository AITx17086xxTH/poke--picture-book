type Props = {
  name: string;
  id: number;
  type: string;
};

export function PokemonCard({ name, id, type }: Props) {
  return (
    <>
      <p>
        No.{id} {name} {type}
      </p>
    </>
  );
}
