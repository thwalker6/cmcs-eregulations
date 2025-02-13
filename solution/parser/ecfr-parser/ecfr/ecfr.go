package ecfr

import (
	"context"
	"fmt"
	"io"
	"net/url"
	"path"
	
	"github.com/cmsgov/cmcs-eregulations/ecfr-parser/network"
)

var (
	ecfrSite          = "https://ecfr.gov/api/versioner/v1/"
	ecfrFullXML       = "full/%s/title-%d.xml"
	ecfrVersionsXML   = "versions/title-%d"
	ecfrStructureJSON = "structure/%s/title-%d.json"
)

// FetchFull fetches the full regulation from eCFR
func FetchFull(ctx context.Context, date string, title int, opts ...network.FetchOption) (io.Reader, error) {
	ecfrURL, err := url.Parse(ecfrSite)
	if err != nil {
		return nil, err
	}
	ecfrURL.Path = path.Join(ecfrURL.Path, fmt.Sprintf(ecfrFullXML, date, title))
	return network.FetchWithOptions(ctx, ecfrURL, false, opts)
}

// FetchStructure fetches the structure for a given title and options
func FetchStructure(ctx context.Context, date string, title int, opts ...network.FetchOption) (io.Reader, error) {
	ecfrURL, err := url.Parse(ecfrSite)
	if err != nil {
		return nil, err
	}
	ecfrURL.Path = path.Join(ecfrURL.Path, fmt.Sprintf(ecfrStructureJSON, date, title))
	return network.FetchWithOptions(ctx, ecfrURL, false, opts)
}

// FetchVersions fetches the available versions for a given title
func FetchVersions(ctx context.Context, title int, opts ...network.FetchOption) (io.Reader, error) {
	ecfrURL, err := url.Parse(ecfrSite)
	if err != nil {
		return nil, err
	}
	ecfrURL.Path = path.Join(ecfrURL.Path, fmt.Sprintf(ecfrVersionsXML, title))
	return network.FetchWithOptions(ctx, ecfrURL, false, opts)
}

// PartOption is a struct that represents a string referring to the regulation Part
type PartOption struct {
	Part string
}

// Values inserts the Partoption.Part into a urlValues struct
func (p *PartOption) Values() url.Values {
	v := url.Values{}
	v.Set("part", p.Part)
	return v
}

// SubchapterOption is a struct defining the Chapter and Subchapter
type SubchapterOption struct {
	Chapter    string
	Subchapter string
}

// Values returns a url.Values for the Chapter and SubChapter
func (p *SubchapterOption) Values() url.Values {
	v := url.Values{}
	v.Set("chapter", p.Chapter)
	v.Set("subchapter", p.Subchapter)
	return v
}
