interface ImageProps {
  imagePath: string;
}

export const Image = (props: ImageProps) => {
  const { imagePath } = props;

  return (
      <div className="image-container">
        <img className="circular_image" src={ imagePath } alt="Avatar" />
      </div>
  )
}
