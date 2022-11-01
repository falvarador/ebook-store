using AutoMapper;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<BookAuthor, AuthorDto>();
    }
}
