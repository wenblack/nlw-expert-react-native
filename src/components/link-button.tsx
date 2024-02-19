import { Link, LinkProps } from "expo-router";

type LinkButtonProps = LinkProps<string> & {
  title: string;
};

export function LinkButton({ title, ...rest }: LinkButtonProps) {
  return (
    <Link
      className=" font-semibold text-gray-900 text-center text-base "
      {...rest}
    >
      {title}
    </Link>
  );
}
