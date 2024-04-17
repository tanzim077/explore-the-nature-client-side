/*
 * File           : typography.js
 * Project        : explore-the-nature-client-side
 * Created Date   : Sa 20 Jan 2024 12:11:47
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Sat Jan 20 2024
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */
const createTypography = (fontSize, fontWeight, lineHeight) => ({
  fontFamily: ["Nunito", "sans-serif"].join(","),
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing: "0em",
  display: "block",
});

const typography = {
  cst_h1_Bold: createTypography("40px", "700", "48px"),
  cst_h2_Bold: createTypography("36px", "700", "44px"),
  cst_h3_Bold: createTypography("32px", "700", "40px"),
  cst_h4_Bold: createTypography("24px", "700", "32px"),
  cst_h5_Bold: createTypography("20px", "700", "28px"),
  cst_h6_Bold: createTypography("16px", "700", "28px"),
  cst_h7_Bold: createTypography("12px", "700", "28px"),

  cst_h1_semiBold: createTypography("40px", "600", "48px"),
  cst_h2_semiBold: createTypography("36px", "600", "44px"),
  cst_h3_semiBold: createTypography("32px", "600", "40px"),
  cst_h4_semiBold: createTypography("24px", "600", "30px"),
  cst_h5_semiBold: createTypography("20px", "600", "28px"),
  cst_h6_semiBold: createTypography("16px", "600", "28px"),
  cst_h7_semiBold: createTypography("12px", "600", "28px"),

  cst_h1_medium: createTypography("40px", "500", "48px"),
  cst_h2_medium: createTypography("36px", "500", "44px"),
  cst_h3_medium: createTypography("32px", "500", "40px"),
  cst_h4_medium: createTypography("24px", "500", "30px"),
  cst_h5_medium: createTypography("20px", "500", "28px"),
  cst_h6_medium: createTypography("16px", "500", "24px"),
  cst_h7_medium: createTypography("12px", "500", "20px"),

  cst_h1: createTypography("40px", "400", "48px"),
  cst_h2: createTypography("36px", "400", "44px"),
  cst_h3: createTypography("32px", "400", "40px"),
  cst_h4: createTypography("24px", "400", "30px"),
  cst_h5: createTypography("20px", "400", "28px"),
  cst_h6: createTypography("16px", "400", "24px"),
  cst_h7: createTypography("12px", "400", "20px"),
  cst_h8: createTypography("12px", "400", "16px"),

  cst_p1_semiBold: createTypography("18px", "600", "28px"),
  cst_p2_semiBold: createTypography("16px", "600", "24px"),
  cst_p3_semiBold: createTypography("14px", "600", "20px"),
  cst_p4_semiBold: createTypography("12px", "600", "18px"),
  cst_p4_semiBold_2: createTypography("12px", "600", "16px"),

  cst_p1_medium: createTypography("18px", "500", "28px"),
  cst_p2_medium: createTypography("16px", "500", "24px"),
  cst_p3_medium: createTypography("14px", "500", "20px"),
  cst_p3_medium_2: createTypography("14px", "500", "24px"),
  cst_p3_medium_3: createTypography("14px", "500", "16px"),
  cst_p4_medium: createTypography("12px", "500", "18px"),
  cst_p5_medium: createTypography("10px", "500", "12px"),

  cst_p1: createTypography("18px", "400", "28px"),
  cst_p2: createTypography("16px", "400", "24px"),
  cst_p3: createTypography("14px", "400", "20px"),
  cst_p4: createTypography("12px", "400", "18px"),
  cst_p5: createTypography("10px", "400", "16px"),
};

export default typography;
