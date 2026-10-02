import OpenInNewIcon from "@mui/icons-material/OpenInNew";

type ATagBaseProps = {
  href: string;
  linkText: string;
};

export default function ATagBase(props: ATagBaseProps) {
  return (
    <a
      href={props.href}
      className="break-words text-blue-500 hover:text-blue-400 hover:underline"
      target="_blank"
    >
      {props.linkText}
      <OpenInNewIcon fontSize="small" className="align-sub" />
    </a>
  );
}
