import "./FooterLink.css";

export default function FooterLink({ className, name, image }) {
  return (
    <div className={"col-sm-1 col-md-1 " + className}>
      <div className={name}>
        <a href="#">
          <img className="img-responsive" src={image} />
        </a>
      </div>
    </div>
  );
}
