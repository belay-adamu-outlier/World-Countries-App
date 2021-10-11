import {
  StyledButton,
  StyledCountriesButton,
  StyledButtonWrapper,
  StyledFlag,
  StyledFlexWrapper,
  StyledDetailsWrapper,
  StyledBorderContriesWrapper,
} from "./styles/CardDetailsComponent.styled";
export default function CardDetailsComponent() {
  return (
    <>
      <StyledButtonWrapper>
        <StyledButton>
          {" "}
          <i className="fa fa-long-arrow-left"></i>&nbsp; Back
        </StyledButton>
      </StyledButtonWrapper>
      <StyledFlexWrapper>
        <StyledFlag />
        <StyledDetailsWrapper>
          <div>
            <h2>Belgium</h2>
          </div>
          <div>
            <h3>
              Native name: <span>Shilito</span>
            </h3>
            <h3>
              Population: <span>Shilito</span>
            </h3>
            <h3>
              Region: <span>Shilito</span>
            </h3>
            <h3>
              Sub Region: <span>Shilito</span>
            </h3>
            <h3>
              Capital: <span>Shilito</span>
            </h3>
          </div>
          <div>
            <h3>
              Top Level Domain: <span>Shilito</span>
            </h3>
            <h3>
              Currencies: <span>Shilito</span>
            </h3>
            <h3>
              Language: <span>Shilito</span>
            </h3>
          </div>
          <StyledBorderContriesWrapper>
            <h2>Border Countries:</h2>
            <div>
              <StyledCountriesButton>Sweden</StyledCountriesButton>
              <StyledCountriesButton>Netherlands</StyledCountriesButton>
              <StyledCountriesButton>Republic of Russia</StyledCountriesButton>
            </div>
          </StyledBorderContriesWrapper>
        </StyledDetailsWrapper>
      </StyledFlexWrapper>
    </>
  );
}
