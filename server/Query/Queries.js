const ContactSchema={
    add:'INSERT INTO contact (fname, lname, phone, email) VALUES (?, ?, ?, ?)',
    show:'SELECT * from contact',
    search:`SELECT * FROM contact WHERE id=?`,
    update:`UPDATE contact set ? WHERE id=?`,
    delete:`DELETE FROM contact WHERE id=?`
}
module.exports={ContactSchema};