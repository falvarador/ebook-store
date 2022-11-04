using AutoMapper;

public class BookAuthorProfile : Profile
{
    public BookAuthorProfile()
    {
        CreateMap<BookAuthor, AddAuthorDto>();
    }
}
