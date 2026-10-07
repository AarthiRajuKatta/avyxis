import rootPool from "../../config/db.js";

export const findCompanyByKey = async (companyKey) => {
  const [companies] = await rootPool.execute(
    `
    SELECT *
    FROM mst_companies
    WHERE company_key = ?
    `,
    [companyKey]
  );
  return companies.length > 0 ? companies[0] : null;
};
