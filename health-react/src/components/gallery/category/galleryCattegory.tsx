type category = {
  icon: string; // A MODIFIER
  title: string;
  text: string;
  onclick: React.MouseEventHandler<HTMLButtonElement>;
  redirectionName: string;
};

const GalleryCategory = () => {
  return (
    // mettre en balise a
    <div className="programs-categories">
      <div className="category">
        {/* <fa-icon [icon]="faDumbbell" size="2x"></fa-icon> */}
        <span className="category-title">Title</span>
        <span>
          This programs is designed for those who exercises only for their body
          fitness not body building.
        </span>
        <div className="join-now">
          {/* onclick above */}
          <span>Join Now</span>
          {/* <fa-icon class="arrow" [icon]="faArrow" size="2x"></fa-icon> */}
        </div>
      </div>
    </div>
  );
};
export default GalleryCategory;
