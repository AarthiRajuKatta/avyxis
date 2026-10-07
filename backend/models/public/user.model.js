export const findUserByEmail = async (pool, email) => {
  const [users] = await pool.execute(
    `
    SELECT
      user_id,
      full_name,
      email,
      password_hash,
      role_id
    FROM tbl_users
    WHERE email = ?
    `,
    [email]
  );
  return users.length > 0 ? users[0] : null;
};
