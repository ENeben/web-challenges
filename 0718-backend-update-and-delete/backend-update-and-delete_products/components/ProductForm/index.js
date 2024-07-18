import { StyledForm, StyledHeading, StyledLabel } from "./ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";

export default function ProductForm({
  onSubmit,
  isEditing,
  valueName,
  valueDescription,
  valuePrice,
  valueCurrency,
}) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledHeading>
        {isEditing ? "Update Fish" : "Add a new Fish"}
      </StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input type="text" id="name" name="name" defaultValue={valueName} />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input
          type="text"
          id="description"
          name="description"
          defaultValue={valueDescription}
        />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input
          type="number"
          id="price"
          name="price"
          min="0"
          defaultValue={valuePrice}
        />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select id="currency" name="currency" defaultValue={valueCurrency}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
