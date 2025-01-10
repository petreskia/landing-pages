interface BannerProps {
  title: string;
}

export const Banner = ({ title }: BannerProps) => {
  return (
    <div className="Banner">
      <h1>{title}</h1>
    </div>
  );
};
